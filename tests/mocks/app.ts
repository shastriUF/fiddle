import { FileManager } from './file-manager';
import { RunnerMock } from './runner';
import { RemoteLoader } from './remote-loader';

export class AppMock {
  public setupUnsavedOnChangeListener = jest.fn();
  public setValues = jest.fn();
  public getValues = jest.fn(() => ({
    main: 'main-content',
    renderer: 'renderer-content',
    html: 'html-content'
  }));

  public setupTheme = jest.fn();

  public typeDefDisposable = {
    dispose: jest.fn()
  };

  public fileManager = new FileManager();
  public runner = new RunnerMock();
  public remoteLoader = new RemoteLoader();

  public monaco = {
    editor: {
      setTheme: jest.fn(),
      defineTheme: jest.fn()
    },
    languages: {
      typescript: {
        javascriptDefaults: {
          addExtraLib: jest.fn()
        }
      }
    }
  };
}
