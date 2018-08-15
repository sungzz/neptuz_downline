# -*- coding: utf-8 -*-
from odoo import models, fields, api
from odoo.exceptions import ValidationError
class ResPartner(models.Model):
    _inherit = 'res.partner'

    downline_line_ids = fields.One2many('neptuz.downline', 'partner_id', 'Partner Downline')

