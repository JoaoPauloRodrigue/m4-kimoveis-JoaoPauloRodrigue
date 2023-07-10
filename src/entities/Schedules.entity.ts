import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./RealEstate.entity";
import User from "./User.entity";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string | Date;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => RealEstate, (rE) => rE.schedule)
  realEstate: RealEstate;

  @ManyToOne(() => User, (u) => u.schedule)
  user: User;
}

export default Schedule;
