{
    'name': 'Neptuz Downline Custom',
    'version': '1.0',
    'category': 'Referal',
    'website': 'https://www.neptuz.com',
    'description': """
Functional Downline Feature for easy to record Referal Customer
""",
    'depends': ['point_of_sale'],
    'data': [
        'views/partner_view.xml',
        'views/templates.xml'
    ],
    'installable': True,
    'auto_install': False,
    'application': True,
    'qweb': ['static/src/xml/*.xml'],
}
