class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :description
      t.string :ingredients
      t.string :steps
      t.integer :serving_size
      t.integer :estimated_time
      t.integer :rating
      t.string :image_url
      
      t.timestamps
    end
  end
end
