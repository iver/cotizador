# == Schema Information
#
# Table name: users
#
#  id :integer(11) not null, primary key
#  firstname :string(255)
#  lastname  :string(255)
#  email     :string(255)
#  created_at :datetime
#  updated_at :datetime

class User < ActiveRecord::Base

end

