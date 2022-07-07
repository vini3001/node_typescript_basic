import { randomBytes } from 'crypto';
import {Model, DataTypes} from 'sequelize';
import{sequelize} from '../instances/mysql'

interface UserInstance extends Model {
    id: number;
    nome: string;
    age: number;
}

export const User = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    nome: {
        type: DataTypes.STRING,
        get(){
            return this.getDataValue('nome').toUpperCase()
        }
    },
    FirstLetterName:{
        type: DataTypes.VIRTUAL,
        get(){
            return this.getDataValue('nome').charAt(0)
        }
    },
    age: {
        type:DataTypes.INTEGER,
        defaultValue: 18,
        set(value:number){
            if(value < 18){
                value = 18
            }
            this.setDataValue('age', value)
        }
    }

}, {
    tableName: 'users',
    timestamps: false
})