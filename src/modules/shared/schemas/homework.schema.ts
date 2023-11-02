import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { EAttemptScore, EStudentReviewRole } from '../enums/schema.enum';
import { Question, QuestionSchema } from './question.schema';

export type HomeworkDocument = Homework & Document;

@Schema({
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
})
export class Homework {
  @Prop({ required: true })
  testFile: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  sentences: number;

  @Prop({ required: true })
  totalScore: number;

  @Prop()
  solutionFile?: string;

  @Prop()
  solutionVideo?: string;

  @Prop()
  password?: string;

  @Prop()
  duration?: number;

  @Prop()
  startTime?: Date;

  @Prop()
  dueTime?: string;

  @Prop()
  allowStudentReview: boolean;

  @Prop({ enum: EStudentReviewRole, required: true })
  studentRole: EStudentReviewRole;

  @Prop({ required: true })
  attempts: number;

  @Prop({ required: true, enum: EAttemptScore })
  attemptScore: EAttemptScore;

  @Prop({ type: [QuestionSchema], required: true })
  questions: Question[];
}

export const HomeworkSchema = SchemaFactory.createForClass(Homework);
