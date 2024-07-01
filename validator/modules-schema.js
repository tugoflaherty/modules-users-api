// Imports ---------------------------------------
import joi from 'joi';

// Schema ----------------------------------------
const idSchema = joi.number().integer().min(1).required();

const objSchema = joi.object({
    ModuleID: joi.number().integer(),
    ModuleName: joi.string().min(8),
    ModuleCode: joi.string().regex(/^\D{2}\d{4}$/),
    ModuleLevel: joi.number().integer().min(3).max(7),
    ModuleLeaderID: joi.number().integer(),
    ModuleImageURL: joi.string().uri()
});

const mutableKeys = ['ModuleName', 'ModuleCode', 'ModuleLevel', 'ModuleLeaderID', 'ModuleImageURL'];

const createSchema = objSchema.and(...mutableKeys);

const updateSchema = joi.object({
    id: idSchema,
    obj: objSchema.or(...mutableKeys)
});

export default { idSchema, createSchema, updateSchema };