const response = fetch(
  "https://www.latamairlines.com/br/pt?origin=grup&destination=&departureDate=&arrivalDate=",
  {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-US,en;q=0.9",
      "sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="101", "Opera";v="87"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Linux"',
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      cookie:
        "_xp_application_lang=pt; _xp_application_country=br; _xp_session=s%3A4wV5u6YeOO_HZSuHLstwf3tRcZdh-Cak.pGAgNSWdxuLQw1xPC%2FhbQnkkGeh16auENCjCDBD8cQo; bm_sz=C8E842FA1446E4B8A176B52332E1C48E~YAAQjZQzuEkFkO+AAQAA8LDJ+A+rK1ST37KPR6uY9Bar8KZw+85qZUtaxkfgPbkh0LNWicSicWipPpunAPAuZZJ9X3hsE+7uajKOIeVbxrOsZ5WvVKuW2Cfw/Au7Xe41rNkVhcGRf+4W83q45VNS8PQPWNMLyxqnLrhStQQ4kk8XJ2nF/5rYKO115owx4a2RlCOGmJ/1TEN86yQDT/6Be6oGOXy2K/0xCatNItHPhte8ZQ41pTCBcsaHtCp18r7xXVFMKlB18NaHTrg1pmSqPlSH7SonVRJMzBwdxAN1arKuZgg9qf40kH1M~3158851~4272195; _abck=5C6A6CFFB3C25C6E21D5EF875A0939FB~0~YAAQjZQzuOsGkO+AAQAAUQ/K+AcDzc7Qjc1NZ2MPxyqWsM+kWjUOXfT4UW/Z68EjQyGSrHcD4ZCn/pAJyPGRVeO3WbtPWi0l7b3mkAT4JGiX9i6TbUhSkbg0WndGN7458D68ZVOiUZCI+0Z/grYAL3mSVZQGnO+rl6EOtg1/zdMltDPfSOkcspQ9OunoUSVt6Rd7G86G68vG/i/bBWkZssyJ644mgb71+ki+u9qoX19tTh0wW4fanOW684H9RjusWuHrl36bV4A7eY958CbYk9PlOrpuV6Nl9zzgn+NUmqOZnrS8QRsq1M5B1cJH0JIzVzYzH7/c3dJkbvOGNmRemP2xQES094s2aEgx825VPQ5o9i4jF1OTLvklzulur7v8x/PE5ag5XcXfMVXLWyrRPIK92cstkXLypRiuFQ==~-1~||-1||~-1; ak_bmsc=ECD7FDDAB09DE617A944205244090427~000000000000000000000000000000~YAAQjZQzuOwGkO+AAQAAfBDK+A9inwwWAulibueXUaTAGmiVThJrF1sbu9Z+hK5Nnu2PAFv2JN/LJY0WEFJP10Dw5oB6IBg/uKmVwGi2JD8icdvsTphXKuso/f0bWH/xkj1AiwHekTA3CLcV6fuoF2NxALNVN0haOwbOQJEYxdlV1sJfGYnXqDIo14vs3Tw52+ANGVeW57EMiInrESgtCa4HyMQXPj7iDIcijAcnFR2YugGNyOOgzSbjSS54iztTgAQjx91un7kh3NSIJzBOJERyOpAtuDl25sBeoK6AQwD08eOFpLglR/plq7m14duGFEG9aQQxVZ0rilF8BiAbSDHT26P2TgQAZHny1AxoEa3tlUS6kXYFHmsdqbrLdncqNoCs1MeNT210OT7H1qzJMRKE44RIJyCWXsY1qEewJLCNffLAO8UEyL+Uxdj51tXGlqmGRjc/tW8KGaG4VMbCM0Epmee2wPNG7op83klBviNNW604AxcND6blaU3Yd9nzEIJ8ushJcOLs0iHbxG4=",
      Referer:
        "https://www.latamairlines.com/br/pt?gclid=EAIaIQobChMI0b7dnL359wIVRcKRCh3FdAmjEAAYASAAEgLOvPD_BwE&gclsrc=aw.ds",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: null,
    method: "GET",
  }
);
