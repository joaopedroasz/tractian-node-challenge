# Tractian Challenge

This project aims to resolve a challenge for Backend developer job opportunity.

## Problem:

- Be able to register:
  - Companies; 
  - Units from this companies;
  - Assets;
  - Users.

- View condensed data from those *entities*;

### Notes:

- Assets must have:
  - Image;
  - Description;
  - Model;
  - Owner;
  - Status (*Running*, *Alert*, *Stopped*);
  - Health level (0% to 100%);

- Each asset is part of a unit;

- Each unit is part of a company;

- Each user is part of a company;

### Domain:

- Companies:
  - Name;
  - Description;
  - Unities (Many of unit);
  - Users (Many of user);

- Unit:
  - Name;
  - Description;
  - Assets (Many of asset);
  - Company;

- Asset:
  - Image;
  - Description;
  - Model;
  - Owner (One unity);
  - Status (AssetStatus);
  - Health;

- AssetStatus:
  - Name;
  - Id;

- User:
  - Name;
  - E-mail;
  - Company;
