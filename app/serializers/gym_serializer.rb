class GymSerializer < ActiveModel::Serializer
  attributes :id, :name, :avg_score, :image_url, :slug

  has_many :reviews
end
