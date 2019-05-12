# Ask & check database credential
echo !!! DATABASE CREDENTIAL !!!
read -p "Url: " db_url
read -p "User: " db_user
read -p "Password: " -s db_pw; echo


# Tables
echo
echo --- PROCESSING TABLES ---
for file in tables/*; do
	echo $file
done

# Functions
echo
echo --- PROCESSING FUNCTIONS ---
for file in functions/*; do
	echo $file
done

# Data
echo
echo --- PROCESSING DATA ---
for file in data/*; do
	echo $file
done


# Show feedback a bit longer
sleep 3