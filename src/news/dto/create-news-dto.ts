import { IsBoolean, IsString } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  readonly title: string = 'New News Title';

  @IsString()
  readonly text: string = 'New News Text';

  @IsString()
  readonly type: string = 'general';

  @IsBoolean()
  readonly isPublished: boolean = false;
}
