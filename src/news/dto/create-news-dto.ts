export class CreateNewsDto {
  readonly title: string = 'New News Title';
  readonly text: string = 'New News Text';
  readonly type: string = 'general';
  readonly isPublished: boolean = false;
}
