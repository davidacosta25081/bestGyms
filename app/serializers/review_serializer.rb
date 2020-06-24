class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :score

  belongs_to :gym
end
