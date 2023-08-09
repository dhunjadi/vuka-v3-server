import { IsBoolean, IsString } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly text: string;

  @IsString()
  readonly type: string;

  @IsBoolean()
  readonly isPublished: boolean;
}
