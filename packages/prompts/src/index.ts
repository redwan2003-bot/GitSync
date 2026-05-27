import * as fs from 'fs';
import * as path from 'path';

export * from './schemas';

/**
 * Loads a Handlebars template by name.
 * Assumes templates are stored in the 'templates' directory alongside this file.
 */
export function getTemplate(name: string): string {
  const templatePath = path.join(__dirname, 'templates', `${name}.hbs`);
  return fs.readFileSync(templatePath, 'utf-8');
}
