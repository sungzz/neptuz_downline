# -*- coding: utf-8 -*-
from odoo import models, fields, api
class NeptuzDownline(models.Model):
    _name = 'neptuz.downline'
    _description = 'Partner Downline'

    name = fields.Char('Partner Downline')
    sequence = fields.Integer('No')
    date_created = fields.Datetime('Create Date')
    partner_id = fields.Many2one('res.partner', 'Partner Downline')
    invoice_id = fields.Many2one('account.invoice', 'Invoice Number')
