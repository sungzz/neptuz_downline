from odoo import models, fields, api
from odoo.exceptions import ValidationError
class PosOrder(models.Model):
    _inherit = 'pos.order'

    downline_partner_id = fields.Many2one('res.partner', string='Referral')