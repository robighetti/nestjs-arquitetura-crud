export class EntityNotFoundError extends Error {
  constructor(entityName) {
    super(`Entity ${entityName} not found`);
  }
}
