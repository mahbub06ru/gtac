import os, re

NEW_ADDR_BLOCK = (
    '<p style="margin-top: 1rem;">\n'
    '  <strong>Head office:</strong> Hanif Tower, 4th floor, Uttarkhan Majar, Uttara 1230 Dhaka, Bangladesh<br>\n'
    '  <strong>Badda office:</strong> Nadda, Evercare Road, Raba Ideal Creative madrasa Goli, Waterpolo BD, Vatara, Dhaka<br>\n'
    '  <strong>IT office:</strong> House# 74 Road# 7, Block# H, Banani, Dhaka-1213<br>\n'
    '  <strong>Training:</strong> Plot-9, Road-4, Section-7, Mirpur-11, Dhaka-1216\n'
    '</p>'
)

OLD_SIMPLE = '<p style="margin-top: 1rem;">F24005 UKhan, Uttara 1230 Dhaka, Bangladesh</p>'
OLD_WITH_LABEL = '<p style="margin-top: 1rem;"><strong>Address:</strong><br>F24005 UKhan, Uttara 1230 Dhaka, Bangladesh</p>'
OLD_INLINE = 'F24005 UKhan, Uttara 1230 Dhaka, Bangladesh'
NEW_INLINE = 'Hanif Tower, 4th floor, Uttarkhan Majar, Uttara 1230 Dhaka, Bangladesh'

base = r'E:\githubio\gtac'
count = 0
for root, dirs, files in os.walk(base):
    dirs[:] = [d for d in dirs if d not in ('.idea',)]
    for f in files:
        if not f.endswith('.html'):
            continue
        path = os.path.join(root, f)
        with open(path, 'r', encoding='utf-8') as fh:
            c = fh.read()
        orig = c
        c = c.replace(OLD_WITH_LABEL, NEW_ADDR_BLOCK)
        c = c.replace(OLD_SIMPLE, NEW_ADDR_BLOCK)
        # For inline occurrences (terms/privacy bold Address label)
        c = c.replace(OLD_INLINE, NEW_INLINE)
        if c != orig:
            with open(path, 'w', encoding='utf-8') as fh:
                fh.write(c)
            print('Updated:', path.replace(base + '\\', ''))
            count += 1
print('Done. %d files updated.' % count)