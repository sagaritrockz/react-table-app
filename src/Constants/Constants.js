const API = "https://api.worldbank.org/v2/countries/";

const FILTERS = {
    region: [
        {id: "LCN", iso2code: "ZJ", value: "Latin America & Caribbean"},
        {id: "SAS", iso2code: "8S", value: "South Asia"},
        {id: "NA", iso2code: "NA", value: "Aggregates"},
        {id: "SSF", iso2code: "ZG", value: "Sub-Saharan Africa "},
        {id: "ECS", iso2code: "Z7", value: "Europe & Central Asia"},
        {id: "MEA", iso2code: "ZQ", value: "Middle East & North Africa"},
        {id: "EAS", iso2code: "Z4", value: "East Asia & Pacific"},
        {id: "NAC", iso2code: "XU", value: "North America"}
    ],
    incomeLevel: [
        {id: "HIC", iso2code: "XD", value: "High income"},
        {id: "INX", iso2code: "XY", value: "Not classified"},
        {id: "LIC", iso2code: "XM", value: "Low income"},
        {id: "LMC", iso2code: "XN", value: "Lower middle income"},
        {id: "LMY", iso2code: "XO", value: "Low & middle income"},
        {id: "MIC", iso2code: "XP", value: "Middle income"},
        {id: "UMC", iso2code: "XT", value: "Upper middle income"}
    ],
    lendingType: [
        {id: "IBD", iso2code: "XF", value: "IBRD"},
        {id: "IDB", iso2code: "XH", value: "Blend"},
        {id: "IDX", iso2code: "XI", value: "IDA"},
        {id: "LNX", iso2code: "XX", value: "Not classified"}
    ]
}

const HEADERS = ['name', 'iso2Code', 'region', 'capitalCity', 'lendingType', 'incomeLevel']

export { FILTERS, HEADERS, API };
