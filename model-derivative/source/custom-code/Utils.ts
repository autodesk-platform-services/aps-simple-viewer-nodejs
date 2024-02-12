import { Region } from '../model';


export class Utils {
    public static GetPathfromRegion(region: Region): string {
        switch (region) {
            case Region.US:
                return "/modelderivative/v2/designdata/";
            case Region.EMEA:
                return "/modelderivative/v2/regions/eu/designdata/";
            default:
                return "/modelderivative/v2/designdata/";
        }
    }
}
