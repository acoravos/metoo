desc "Add in logs from Harvard Police Department to Incident Database"
task :hupd_import => :environment do
  require 'csv'
  c = 0

  f = CSV.foreach("#{Rails.root}/db/policelog_original.csv", headers: true) do |row|
    puts c += 1
    i = Issue.new
    i.user_id = 1
    i.community_id = 1
    i.description = row[8]
    i.title = row[3]
    i.status = row[7]
    i.address = row[5]+" Cambridge, MA"
    i.save
  end
end