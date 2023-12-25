import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Session } from '../session/session.entity';
import { IsString, MaxLength, Min, MinLength } from 'class-validator';
import { Role } from '../role/role.entity';
import { User } from '../user/user.entity';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (i) => i.id, { nullable: false })
  author: User;

  @Min(1)
  @Column()
  price: number;

  @MinLength(2, { message: 'Title is too short' })
  @MaxLength(255, { message: 'Title is too long' })
  @Column({ nullable: false, length: 255 })
  title: string;

  @Column({ type: 'text', nullable: false })
  @IsString()
  @MinLength(10, { message: 'Description is too short' })
  @MaxLength(5000, { message: 'Description is too long' })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 8 })
  latitude: number;

  @Column({ type: 'decimal', precision: 11, scale: 8 })
  longitude: number;

  // @ManyToOne(() => Category, (i) => i.id, { nullable: false })
  // category: Category;

  // @ManyToOne(() => City, (i) => i.id, { nullable: false })
  // city: City;

  // @OneToMany(() => Image, (i) => i.post )
  // image: Image[];

  // @OneToMany(() => Report, (i) => i.id )
  // report: Report[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
