class GymSerializer < ActiveModel::Serializer
  attributes :id, :name, :avg_score, :image_url, :slug, :description

  has_many :reviews
end
