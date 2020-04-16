import { AbstractTestInfo } from './AbstractTestInfo';
import { AbstractTestSuiteInfoBase } from './AbstractTestSuiteInfoBase';
import { SharedVariables } from './SharedVariables';

export class GroupTestSuiteInfo extends AbstractTestSuiteInfoBase {
  public children: AbstractTestInfo[] = [];

  public constructor(shared: SharedVariables, label: string, id?: string) {
    super(shared, label, undefined, id);
  }
}
