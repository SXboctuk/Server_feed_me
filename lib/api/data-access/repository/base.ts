import { Model } from 'sequelize/types';
import { IRead, IWrite } from './interface';

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    public readonly _model: Model;

    find(item: T): Promise<T[]> {
        throw new Error('Method not implemented.');
    }
    findOne(id: string): Promise<T> {
        throw new Error('Method not implemented.');
    }
    create(item: T): Promise<T> {
        throw new Error('Method not implemented.');
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}
