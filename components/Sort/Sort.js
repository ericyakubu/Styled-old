import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Input } from "@mui/material";
import { Selectors, SelectorsInner } from "./style";
import { useStateContext } from "../../lib/context";

function Sort() {
    const { pagesSize, setPagesSize, searchTag, setSearchTag, searchTitle, setSearchTitle, searchMinPrice, setSearchMinPrice, searchMaxPrice, setSearchMaxPrice, sortAlph, setSortAlph, tags } = useStateContext();
    const _handleChange = (e, variation) => {
        e.preventDefault();
        switch (variation) {
            case "alph":
                setSortAlph(e.target.value);
                break;
            case "tag":
                setSearchTag(e.target.value);
                break;
            case "pageSize":
                setPagesSize(e.target.value);
                break;
            case "name":
                setSearchTitle(e.target.value);
                break;
            case "minPrice":
                let roundedMin = parseFloat(e.target.value);
                setSearchMinPrice(roundedMin);
                break;
            case "maxPrice":
                let roundedMax = parseFloat(e.target.value);
                setSearchMaxPrice(roundedMax);
                break;

            default:
                break;
        }
    };

    return (
        <Selectors>
            <SelectorsInner>
                <Input placeholder="Name" type="text" sx={{ width: 220 }} value={searchTitle} onChange={(e) => _handleChange(e, "name")} />

                <FormControl sx={{ minWidth: 180 }} size="small">
                    <InputLabel>Alphabetically</InputLabel>
                    <Select label="Alphabetically" onChange={(e) => _handleChange(e, "alph")} value={sortAlph}>
                        <MenuItem value={`title:asc`}>A-Z</MenuItem>
                        <MenuItem value={`title:desc`}>Z-A</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 180 }} size="small">
                    <InputLabel>Tag</InputLabel>
                    <Select label="Tag" onChange={(e) => _handleChange(e, "tag")} value={searchTag}>
                        {tags &&
                            tags.map((tag) => (
                                <MenuItem key={`${tag.attributes.tag}keytag`} value={tag.attributes.tag}>
                                    {tag.attributes.tag}
                                </MenuItem>
                            ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 180 }} size="small">
                    <InputLabel>Page Size</InputLabel>
                    <Select label="Page Size" onChange={(e) => _handleChange(e, "pageSize")} value={pagesSize}>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
                </FormControl>

                <div id="priceSelectors">
                    <h3>Price</h3>
                    <Input placeholder="Min" type="number" sx={{ maxWidth: 120 }} value={searchMinPrice} onChange={(e) => _handleChange(e, "minPrice")} />
                    <Input placeholder="Max" type="number" sx={{ maxWidth: 120 }} value={searchMaxPrice} onChange={(e) => _handleChange(e, "maxPrice")} />
                </div>
            </SelectorsInner>
        </Selectors>
    );
}

export default Sort;
