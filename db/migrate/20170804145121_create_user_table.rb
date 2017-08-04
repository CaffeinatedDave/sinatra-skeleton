class CreateUserTable < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :salt
      t.string :pass
    end
  end
end
