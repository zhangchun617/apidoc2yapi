import os, sys
from jinja2 import Environment, PackageLoader, FileSystemLoader

def loadTemplate():
    templates_dir = os.path.join(sys.exec_prefix, 'templates')
    if os.path.exists(templates_dir):
        env = Environment(loader=FileSystemLoader(templates_dir))
    else:
        env = Environment(loader=PackageLoader(__name__, 'templates'))
    return env.get_template('jmeter.jinja')
