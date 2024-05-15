import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Slot } from './slot.entity';
import { ParkingLot } from './parkingLot.entity';
import { Payment } from './payment.entity';

@Entity({
  name: 'appointments',
})
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  license_plate: string;

  @Column({ type: 'varchar' })
  date: string;

  @Column({ type: 'varchar' })
  time: string;

  @Column({ type: 'varchar' })
  duration: string;

  @Column({ type: 'boolean' })
  is_parked: boolean;

  @Column({ type: 'varchar' })
  status: 'active' | 'deleted';

  @ManyToOne(() => User, (user) => user.appointments)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Slot, (slot) => slot.appointment)
  @JoinColumn({ name: 'slot_id' })
  slot: Slot;

  @ManyToOne(() => ParkingLot, (parkingLot) => parkingLot.appointments)
  @JoinColumn({ name: 'parking_lot_id' })
  parking_lot: ParkingLot;

  @OneToOne(() => Payment, payment => payment.appointment)
  payment: Payment;
}
