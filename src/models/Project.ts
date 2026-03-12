import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectSchema = new Schema<IProject>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: [String], default: [] },
    githubUrl: { type: String },
    liveUrl: { type: String },
  },
  { timestamps: true },
);

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);