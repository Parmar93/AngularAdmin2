import { ExportFileModule } from './export-file.module';

describe('ExportFileModule', () => {
  let exportFileModule: ExportFileModule;

  beforeEach(() => {
    exportFileModule = new ExportFileModule();
  });

  it('should create an instance', () => {
    expect(exportFileModule).toBeTruthy();
  });
});
