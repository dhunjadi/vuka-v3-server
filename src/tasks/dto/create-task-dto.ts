import { IsBoolean, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly text: string;

  @IsString()
  readonly type: string;

  @IsString()
  readonly subject: string;

  @IsString()
  readonly year: string;

  @IsBoolean()
  readonly isPublished: boolean;
}
