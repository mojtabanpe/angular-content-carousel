import xml.etree.cElementTree as ET
import datetime
import os

from pymongo import MongoClient
client = MongoClient('mongodb://root:mongoadmin@158.255.74.93:27017')
db = client.broker



def registerCategorySiteMaps():
    categories_db = db.dokkoon_category
    categories = list(categories_db.find())
    root = ET.Element('urlset')
    # root.attrib['xmlns:xsi']="http://www.w3.org/2001/XMLSchema-instance"
    # root.attrib['xsi:schemaLocation']="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    root.attrib['xmlns']="http://www.sitemaps.org/schemas/sitemap/0.9"

    for category in categories:
        uid = category['id']
        url = "https://www.omranmodern.com/category/" + category['slug']
        dt = datetime.datetime.now().strftime ("%Y-%m-%d")
        doc = ET.SubElement(root, "url")
        ET.SubElement(doc, "loc").text = url
        ET.SubElement(doc, "lastmod").text = dt
        ET.SubElement(doc, "changefreq").text = "daily"
        ET.SubElement(doc, "priority").text = "0.9"

    tree = ET.ElementTree(root)
    tree.write('sitemap/categoty.xml', encoding='utf-8', xml_declaration=True)

def registerMaterialsSiteMaps():
    materials_db = db.dokkoon_mothermaterial
    materials = list(materials_db.find())
    root = ET.Element('urlset')
    # root.attrib['xmlns:xsi']="http://www.w3.org/2001/XMLSchema-instance"
    # root.attrib['xsi:schemaLocation']="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    root.attrib['xmlns']="http://www.sitemaps.org/schemas/sitemap/0.9"

    for material in materials:
        uid = material['id']
        url = "https://www.omranmodern.com/materials/" + material['slug']
        dt = datetime.datetime.now().strftime ("%Y-%m-%d")
        doc = ET.SubElement(root, "url")
        ET.SubElement(doc, "loc").text = url
        ET.SubElement(doc, "lastmod").text = dt
        ET.SubElement(doc, "changefreq").text = "daily"
        ET.SubElement(doc, "priority").text = "0.9"

    tree = ET.ElementTree(root)
    tree.write('sitemap/material.xml', encoding='utf-8', xml_declaration=True)


def registerServicesSiteMaps():
    services_db = db.dokkoon_motherservice
    services = list(services_db.find())
    root = ET.Element('urlset')
    # root.attrib['xmlns:xsi']="http://www.w3.org/2001/XMLSchema-instance"
    # root.attrib['xsi:schemaLocation']="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    root.attrib['xmlns']="http://www.sitemaps.org/schemas/sitemap/0.9"

    for service in services:
        uid = service['id']
        url = "https://www.omranmodern.com/services/" + service['slug']
        dt = datetime.datetime.now().strftime ("%Y-%m-%d")
        doc = ET.SubElement(root, "url")
        ET.SubElement(doc, "loc").text = url
        ET.SubElement(doc, "lastmod").text = dt
        ET.SubElement(doc, "changefreq").text = "daily"
        ET.SubElement(doc, "priority").text = "0.9"

    tree = ET.ElementTree(root)
    tree.write('sitemap/service.xml', encoding='utf-8', xml_declaration=True)

def registerSellersSiteMaps():
    sellers_db = db.dokkoon_seller
    sellers = list(sellers_db.find())
    root = ET.Element('urlset')
    # root.attrib['xmlns:xsi']="http://www.w3.org/2001/XMLSchema-instance"
    # root.attrib['xsi:schemaLocation']="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    root.attrib['xmlns']="http://www.sitemaps.org/schemas/sitemap/0.9"

    for seller in sellers:
        uid = seller['id']
        url = "https://www.omranmodern.com/sellers/" + seller['slug']
        dt = datetime.datetime.now().strftime ("%Y-%m-%d")
        doc = ET.SubElement(root, "url")
        ET.SubElement(doc, "loc").text = url
        ET.SubElement(doc, "lastmod").text = dt
        ET.SubElement(doc, "changefreq").text = "weekly"
        ET.SubElement(doc, "priority").text = "0.5"

    tree = ET.ElementTree(root)
    tree.write('sitemap/seller.xml', encoding='utf-8', xml_declaration=True)


registerCategorySiteMaps()
registerMaterialsSiteMaps()
registerServicesSiteMaps()
registerSellersSiteMaps()

os.system('docker cp sitemap web_server:/sitemap/.')