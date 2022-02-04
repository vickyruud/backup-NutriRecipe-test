class Recipe < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :ratings, dependent: :destroy
  has_many :comments, dependent: :destroy
end
