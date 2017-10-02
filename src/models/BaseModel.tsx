
import { store } from '../store';
import { isEmpty, keys, contains } from '../utils/generalUtils';
import { saveInstance, deleteInstance, saveAllInstances, deleteAllInstances } from '../../src/actions/modelActions';

export class BaseModel<P> {
    static resource: string;
    resource: string;
    static constraint;
    static defaultProps;

    constructor(public props) {
        this.resource = this.constructor.resource;
        this.props = props;
    }

    private assignDefault() {
        let defaultProps = this.constructor.defaultProps;
        if (!defaultProps) {
            return;
        }
        keys(defaultProps, key => {
            if (isEmpty(this.props.key)) {
                this.props[key] = defaultProps[key];
            }
        });
    }

    getStoreKey(): string {
        return `${this.resource}${this.props.id}`;
    }

    $save(identifier: string = ''): BaseModel<P> {
        if (!this.validate()) {
            throw Error;
        }
        saveInstance(this, this.getStoreKey(), identifier);
        return this;
    }

    $delete(casecade: boolean = true): void {
        deleteInstance(this, this.getStoreKey());
    }

    private validate(): boolean {
        let constraints = this.constructor.constraints;
        if (isEmpty(constraints)) {
            return true;
        }
        validateObject(this.props, constraints);
    }

    static get(id: string, state = store.getState()) {
        let modelState = state.models;
        if (!modelState) {
            return;
        }
        let storeKey: string = `${this.resource}${id}`;
        return modelState.toJS ? modelState.get(storeKey) : modelState[storeKey];
    }

    static getAll(ids: string[]) {
        const instances = this.list();
        return instances.filter(instance => {
            return contains(ids, instance.props.id);
        });
    }

    static list(state = store.getState()) {
        return state.models.filter(instance => instance.resource === this.resource).toArray();
    }

    static saveAll<T extends BaseModel<{}>>(instances: T[]): void {
        for (let instance of instances) {
            if (!validateObject(instance, this.constraints)) {
                throw Error;
            }
        }
        instances.map((instance, index) => {
            saveInstance(instance, `${this.resource}`);
        });
        saveAllInstances(instances);
    }

    static deleteAll<T extends BaseModel<{}>>(instances: T[] = this.list()): void {
        deleteAllInstances(instances.map(instance => instance.getStoreKey()));
    }
}

function generateInstanceMap(instances: BaseModel<{}>[]) {
    if (isEmpty(instances)) {
        return;
    }
    let instanceMap = {};

    instances.forEach(instance => {
        instanceMap[instance.getStoreKey()] = instance;
    });
    return instanceMap;
}

function validateObject(obj: Object, rules: Object): boolean {
    for (let prop in rules) {
        if (rules.hasOwnProperty(prop)) {
            let constraint = rules[prop];
            if (!constraint(obj[prop])) {
                return false;
            }
        }
    }
    return true;
}
