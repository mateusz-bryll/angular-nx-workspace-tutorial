import { async, TestBed } from '@angular/core/testing';
import { AngularMaterialLoaderModule } from './shared-angular-material-loader.module';

describe('AngularMaterialLoaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialLoaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AngularMaterialLoaderModule).toBeDefined();
  });
});
