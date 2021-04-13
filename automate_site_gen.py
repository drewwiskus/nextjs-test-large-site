import os

source_file = open("clone_file.tsx", "r")
source_text = source_file.read()
source_file.close()

directory = "/Users/andre/dev/nextjs-test-large-site/public/images"
folders = [x[0] for x in os.walk(directory)];

routeHtml = []

# create a React blob of tsx for all of the <Link/> components.
for f in folders:
    for root, dirs, files in os.walk(f"{directory}/{f[54:55]}"):
        for file in files:
            if file.endswith(".JPG"):
                filePath = os.path.join(root, file).replace("\\", "/")
                route = f"X{f[54:55]}{filePath[56:58]}"
                link_text = f"<Link href=\"/test/{route}\">{route}</Link>|\n"
                routeHtml.append(link_text)

routeHtmlString = "".join(routeHtml)          

# replace content for each uniq route
for f in folders:
    for root, dirs, files in os.walk(f"{directory}/{f[54:55]}"):
        for file in files:
            if file.endswith(".JPG"):
                filePath = os.path.join(root, file).replace("\\", "/")
                routeName = f"X{f[54:55]}{filePath[56:58]}"
                print(filePath[46:70])
                cloned_content = source_text + ""
                updated_content = cloned_content.replace("**NAME**", routeName)
                # updated_content = updated_content.replace("**IMAGE**", filePath[46:70]) 
                updated_content = updated_content.replace("**ROUTES**", routeHtmlString)
                
                new_clone = open(f"test/{routeName}.tsx", "w")
                new_clone.write(updated_content)
                new_clone.close()


