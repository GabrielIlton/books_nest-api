import { Model } from "sequelize-typescript";
import { readdirSync } from "fs";

function importAllModels() {
  const models = []

  readdirSync('src/infra/models').forEach(file => {
    file = file.replace('.ts', '')

    if (file === 'index') return;
    
    const model: Model = require(`./${file}`)
  
    models.push(model[file])
  });

  return models
}

export const models = importAllModels()