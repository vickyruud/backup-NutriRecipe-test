class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :string
      t.string :email
      t.string :password
      t.boolean :admin, :default => false  
      t.boolean :active, :default => true  
      t.timestamps
    end
  end
end
