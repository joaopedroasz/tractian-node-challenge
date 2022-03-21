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
  - Employees (Many of user);

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

### Business Rules:

- Entity creation:
  - Entities are individual. Example: To create a user, isn't need to have a company created;
  - Is possible to change entities relational dependencies after create one. Example: I can create a user and after set his company;

- Entities views:
  - Company:
    - View company data;
    - View unit data:
      - Don't show all assets from each unit, but the number of assets;
