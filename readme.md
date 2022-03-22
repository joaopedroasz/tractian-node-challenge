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
  - units (Many of unit);
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

### Business Rules:

- Entity creation:
  - Entities are individual. Example: To create a unit, isn't need to have a asset created;
  - Is possible to change entities relational dependencies after create one. Example: I can create a company and after set its employees;

- Entities view:
  - Company:
    - View company data;
    - Don't show all users from company, but the number of users;
    - View unit data:
      - Don't show all assets from each unit, but the number of assets;

### Use cases:

- [] Create a company;
- [] Insert user in company;
- [] Create an unit;
- [] Insert many assets in unit;
- [] Create a asset;
- [] Change status of an asset;
- [] Get info from company;
- [] Get info from unit;
- [] Get info from asset;