class AddAddressToIssues < ActiveRecord::Migration
  def change
        add_column :issues, :address, :string
        add_column :issues, :date, :date
  end
end
