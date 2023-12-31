import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table({ modelName: 'books' })
export class BookModel extends Model<BookModel>{
    @Column({ type: DataType.STRING(60), allowNull: false })
    code: string

    @Column({ type: DataType.STRING, allowNull: false })
    name: string

    @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
    price: number
}