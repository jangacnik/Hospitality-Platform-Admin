export class TaskTemplateModel {
  id: string;
  title: string;
  description: string;
  creationTime: string;
  takeover: boolean;
  completed: boolean;
  active: boolean;

  constructor(isNew: boolean) {
    this.title = 'New Task';
    this.description = '';
    if (isNew) {
      this.completed = false;
      this.takeover = false;
      this.active = true;
    }
  }
}
