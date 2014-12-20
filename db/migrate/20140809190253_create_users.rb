class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.datetime :created_at
      t.datetime :updated_at
      t.timestamps
    end
    create_table :addresses do |t|
      t.belongs_to :user
      t.string :street
      t.string :suburb
      t.string :postal_code
      t.datetime :created_at
      t.datetime :updated_at
      t.timestamps
    end
    create_table :services do |t|
      t.belongs_to :user
      t.string  :extension
      t.string  :type
    end
    create_table :payments do |t|
      t.belongs_to :service
      t.decimal :amount
    end
  end
  def self.down
    drop_table :users
  end
end
