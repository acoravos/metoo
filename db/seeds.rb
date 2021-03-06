# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# User.create()

HUPD = User.new(email: "steven_catalano@hupd.harvard.edu", first_name: "HUPD", last_name: "", bio: "Official account of the Harvard University Police Department", avatar_url: "https://upload.wikimedia.org/wikipedia/en/a/af/HUPD_Logo.jpg", zip: '02163')
HUPD.password = "harvard"
HUPD.badge_collection = BadgeCollection.new
HUPD.save!

mike = User.new(email: "mmonovoukas@mba2017.hbs.edu", first_name: "Mike", last_name: "Monovoukas", bio: "First time coder hacking for fun", avatar_url: "http://i.imgur.com/62hJ6Br.jpg", zip: '02115')
mike.password = "harvard"
mike.badge_collection = BadgeCollection.new
mike.save!

sam = User.new(email: "sali@mba2017.hbs.edu", first_name: "Sam", last_name: "Li", bio: "Master of HBS CODE club. Helped Goldman make software. Helped Google make money.", avatar_url: "http://i.imgur.com/JFEuIXq.jpg", zip: '02163')
sam.password = "harvard"
sam.badge_collection = BadgeCollection.new
sam.save!

yoonju = User.new(email: "ykim@mba2017.hbs.edu", first_name: "Yoonju", last_name: "Kim", bio: "Math and computer whiz from greatest university ever.", avatar_url: "http://i.imgur.com/CNsqSKC.jpg", zip: '02163')
yoonju.password = "harvard"
yoonju.badge_collection = BadgeCollection.new
yoonju.save!

andrea = User.new(email: "acoravos@mba2017.hbs.edu", first_name: "Andrea", last_name: "Coravos", bio: "Group Ringleader", avatar_url: "http://i.imgur.com/29yZRlU.jpg", zip: '02163')
andrea.password = "harvard"
andrea.badge_collection = BadgeCollection.new
andrea.save!
#----------------------------------------------------------------------------------#



#-------------------------------- COMMUNITIES ---------------------------------------#
global = Community.create(title: "global")
#------------------------------------------------------------------------------------#



#-------------------------------- ISSUES -------------------------------------------#
theft = Issue.create(user_id: 2, community_id: 1, title: "Someone stole my gem", description: "Unattended gem stolen in the iLab. Stolen Value $1000", latitude: "42.363872", longitude: "-71.123805", status: "open" )

#---------------------------------------------------------------------------------#






#-------------------------------- FIXES ------------------------------------------#

#----------------------------------------------------------------------------------#





#-------------------------------- FIX COMMENTS ---------------------------------------#

#-------------------------------------------------------------------------------------#





#-------------------------------- ISSUE COMMENTS -------------------------------------#

#-------------------------------------------------------------------------------------#





#-------------------------------- USER VOTES ----------------------------------------#
vote1 = UsersVote.create(user_id: 1, issue_id: 1)
vote2 = UsersVote.create(user_id: 1, issue_id: 2)
vote3 = UsersVote.create(user_id: 1, issue_id: 3)
vote4 = UsersVote.create(user_id: 2, issue_id: 4)
vote5 = UsersVote.create(user_id: 2, issue_id: 5)
vote6 = UsersVote.create(user_id: 3, issue_id: 1)
vote7 = UsersVote.create(user_id: 3, issue_id: 2)
vote8 = UsersVote.create(user_id: 3, issue_id: 3)
vote9 = UsersVote.create(user_id: 4, issue_id: 1)
vote10 = UsersVote.create(user_id: 4, issue_id: 2)
#------------------------------------------------------------------------------------#





#-------------------------------- USER WATCHES ---------------------------------------#
watch1 = IssuesWatch.create(user_id: 1, issue_id: 1)
watch1 = IssuesWatch.create(user_id: 1, issue_id: 2)
watch1 = IssuesWatch.create(user_id: 1, issue_id: 3)
watch4 = IssuesWatch.create(user_id: 2, issue_id: 4)
watch5 = IssuesWatch.create(user_id: 2, issue_id: 5)
watch6 = IssuesWatch.create(user_id: 3, issue_id: 6)
watch7 = IssuesWatch.create(user_id: 3, issue_id: 7)
watch8 = IssuesWatch.create(user_id: 3, issue_id: 8)
watch9 = IssuesWatch.create(user_id: 4, issue_id: 1)
watch10 = IssuesWatch.create(user_id: 4, issue_id: 2)
#-------------------------------------------------------------------------------------#





#-------------------------------- CATEGORIES -----------------------------------------#
heavy =         Category.create(name: "Violent crime", description: "Assaults and other reported uses of violence")
very_heavy =    Category.create(name: "Sexual Assault", description: "Sexual incidents which include indecent exposure, sexual harassment, and rape")
dirty =         Category.create(name: "Noise", description: "General noise complaints")
tools =         Category.create(name: "Theft", description: "Stolen property, burglaries, and other reports of theft")
yard_work =     Category.create(name: "Harassment", description: "General (non-sexual) harassment, bullying, or threats")
handyman =      Category.create(name: "Suspicious activity", description: "Trespassing, loitering, and other forms of suspicious activity")
escalate =      Category.create(name: "Escalate", description: "For issues that have not been officially reported but require additional law enforcement attention")
uncategorized = Category.create(name: "Other", description: "All other reported incidents")
#-------------------------------------------------------------------------------------#





#-------------------------------- CATEGORIES-ISSUES ----------------------------------#
heavy.issues << theft
#-------------------------------------------------------------------------------------#


#------------------------------- IMPORTING POLICE LOG-----------------#

# f = File.open('db/policelog_test.csv', 'r')

# f.each_line { |line|
#     fields = line.split(',')
#     i = Issue.new

#     i.title = fields[0].tr_s('"', '').strip
#     i.status = fields[1].tr_s('"', '').strip
#     i.description = fields[2].tr_s('"', '').strip
#     i.save!

#       # i = Issue.create(title: fields[0], status: fields[1], description: field[2])
# }

