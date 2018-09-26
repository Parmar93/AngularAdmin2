import { ManageVersionModule } from './manage-version.module';

describe('ManageVersionModule', () => {
  let ManageVersionModule: ManageVersionModule;

  beforeEach(() => {
    ManageVersionModule = new ManageVersionModule();
  });

  it('should create an instance', () => {
    expect(ManageVersionModule).toBeTruthy();
  });
});
 