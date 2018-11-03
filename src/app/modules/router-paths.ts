import {LinkModel} from '../models/link.model';

export const routes = [
    new LinkModel('Our Company', '/company/',
        [
            new LinkModel('Our vision', '/company/vision'),
            new LinkModel('Who we are', '/company/who-we-are', undefined),
            new LinkModel('Our approach', '/company/approach', undefined)
        ]),
    new LinkModel('Our products', '/products', [
            new LinkModel('Parts', '/products/crown-baele/parts'),
            new LinkModel('Upgrades', '/company/crown-baele/upgrades'),
            new LinkModel('Add-ons', '/company/crown-baele/add-ons'),
            new LinkModel('Services', '/company/crown-baele/services')
        ]),
    new LinkModel('Our solutions', '/solutions', [
        new LinkModel('For Bottle Washers', '/solutions/bottlewashers'),
        new LinkModel('For Fillers', '/solutions/filters'),
        new LinkModel('For Other Machines', '/solutions/others'),
    ]),
    new LinkModel('Contact', '/contact')
];